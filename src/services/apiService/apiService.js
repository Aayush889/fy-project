export const develop = true;

export const WEB_ROUTE = {
  url: develop ? "" : "",
};

export const WhisperService = {
  AnalyzeSentiment: WEB_ROUTE.url + "/sentiment",
};
