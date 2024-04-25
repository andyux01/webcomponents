// @haxcms/aiChat.js
// Chat with an AI agent that knows about the site being produced

/*
curl -X POST http://ec2-44-205-57-53.compute-1.amazonaws.com/handle-query \
     -H "Content-Type: application/json" \
     -d '{"question":"what are forms of energy?", "course":"phys211"}'
*/
import { stdPostBody, stdResponse, invalidRequest } from "../../../utilities/requestHelpers.js";
import { resolveSiteData } from "./lib/JOSHelpers.js";

const aiChatSource = "http://ec2-44-205-57-53.compute-1.amazonaws.com/handle-query";

// site object to validate response from passed in url
export default async function handler(req, res) {
  let context = '';
  // use this if POST data is what's being sent
  let body = {};
  if (req.query.site) {
    body = req.query;
  }
  else {
    body = stdPostBody(req);
  }
  if (body.question && body.type && body.site.file) {
    // get URL bits for validating and forming calls
    let url = '';
    url = body.site.file.replace('/site.json', '');
    // handle trailing slash
    if (url.endsWith('/')) {
      url = url.slice(0, -1);
    }
    var parseURL = new URL(url);
    // verify we have a path / host
    if (parseURL.pathname && parseURL.host) {
      // support for iam vs oer
      if (parseURL.host) {
        // specific to our instances but iam is going to block access when querying for the site content
        // iam is the authoring domain while oer is the openly available one which if printing
        // and rendering the content appropriately, this is the way to do it
        parseURL.host = parseURL.host.replace('iam.', 'oer.');
      }
      const base = `${parseURL.protocol}//${parseURL.host}${parseURL.pathname}`;
      const siteManifest = await resolveSiteData(base);
      context = siteManifest.metadata.site.name;
    }
    // @todo don't hardcode, leverage site that was requested for context assignment
    context = "phys211";
    let data = await fetch(aiChatSource, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      mode: "no-cors",
      redirect: "follow",
      body: JSON.stringify({
        "question": body.question,
        "course": context,
      }),
    })
    .then((d) => {
        return d.ok ? d.json() : null;
    })
    .then((response) => {
      if (response && response.data) {
        console.log(response.data);
        return {
          answers: response.data.answers,
          question: response.data.question,
          status: 200
        }
      }
      return {answer: "Offline", question: body.question, status: 500};
    }).catch((error) => {
      console.error(error);
      return {answer: "Offline", question: body.question, status: 500};
    });
    let options = {};
    // 15 minute cache default
    if (!body.cacheBuster) {
      options.cache = 900;
    }
    res = stdResponse(res, data, options);
  }
  else {
    res = invalidRequest(res, 'site, type, uuid required');
  }
}