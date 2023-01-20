import React, { useState } from "react";
import CardComponent from "./CardComponent";
import { Buffer } from "buffer";

export const NiubizComponent = () => {
  const baseUrl = "https://apisandbox.vnforappstest.com/";
  const user = "integraciones@niubiz.com.pe";
  const password = "_7z3@8fF";
  const merchantId = 456879852;

  let token = "";
  let passwordEncoded = "";
  let sessionKey = "";

  /*
    Services ennpoints
    */

  const endpointSecurity = "api.security/v1/security";
  const endpointSession = "api.ecommerce/v2/ecommerce/token/session/";

  /*
    Labels
    */

  const [labelToken, setLabelToken] = useState("");
  const [labelSessionKey, setSessionKey] = useState("");

  /*
    Types
    */

  type responseSession = { sessionKey: string; expirationTime: number };

  const call = (
    url: string,
    options: any,
    params: any,
    authorization: string,
    callback: any
  ) => {
    if (options.method === "GET" && params !== null) {
      url += "?" + new URLSearchParams(params).toString();
    } else if (options.method === "POST" && params !== null) {
      options.body = JSON.stringify(params);
    }

    if (options.method === "GET") {
      fetch(url, {
        headers: {
          Authorization: authorization,
        },
      })
        .then((response) => {
          const contentType = response.headers.get("content-type");
          if (contentType && contentType.indexOf("application/json") !== -1) {
            return response.json();
          } else {
            return response.text();
          }
        })
        .then((response) => {
          callback(response);
        });
    }

    if (options.method === "POST") {
      fetch(url, {
        method: "POST",
        body: options.body,
        headers: {
          Authorization: authorization,
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          const contentType = response.headers.get("content-type");
          if (contentType && contentType.indexOf("application/json") !== -1) {
            return response.json();
          } else {
            return response.text();
          }
        })
        .then((response) => callback(response));
    }
  };

  const addCard = () => {
    const url = baseUrl + endpointSecurity;
    passwordEncoded = Buffer.from(user + ":" + password, "utf8").toString(
      "base64"
    );
    const authorization = "Basic " + passwordEncoded;

    const options = {
      method: "GET",
    };

    call(url, options, null, authorization, getResponse);
  };

  const getResponse = (response: any) => {
    token = response;
    const url = baseUrl + endpointSession + merchantId;

    const params = {
      amount: "200",
      channel: "web",
    };

    const options = {
      method: "POST",
    };

    setLabelToken(token);

    call(url, options, params, token, getResponseSessionKey);
  };

  const getResponseSessionKey = (response: responseSession) => {
    sessionKey = response.sessionKey;

    setSessionKey(sessionKey);
  };

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://static-content-qas.vnforapps.com/vTokenSandbox/js/checkout.js"
      />
      <CardComponent idCard={8918165} cvvCard={1512} numberCard="1123" />
      <div>Renderizando solicitud Niubiz</div>
      <label>Token:</label>
      <div>{labelToken}</div>
      <label>SessionKey:</label>
      <div>{labelSessionKey}</div>
      <input
        type="button"
        value={"Agregar tarjeta"}
        onClick={(e) => addCard()}
      />
    </div>
  );
};
