import React, { useState, useEffect } from "react";
import CardComponent from "./CardComponent";
import { Buffer } from "buffer";
import { AppendScript } from '../utils/AppendScript '

export const NiubizComponent = () => {
  // AppendScript("/checkout.js");

  const urlLogo = 'https://github.com/zZ30MaxZz/niubiz-payment/blob/main/niubiz-payment/public/starbucks-logo.png?raw=true';
  const merchantname = 'Starbucks';
  const baseUrl = "https://apisandbox.vnforappstest.com/";
  const user = "integraciones@niubiz.com.pe";
  const password = "_7z3@8fF";
  const merchantId = '456879856';
  const amount = '0.01';
  const channel = 'web';
  const purchasenumber: string = Math.floor(Math.random() * (9999999999 - 2020103102) + 2020103102).toString();
  const colorButton = '#006341';

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
      amount: amount,
      channel: channel,
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


  const callJavascript = () => {
    console.log(token);
    console.log(sessionKey);
    console.log(merchantId);
    console.log('Purchase number: ' + purchasenumber);
    console.log('Enviando datos');

    window?.VisanetCheckout.configure({
      action: 'paginaRespuesta',
      sessiontoken: sessionKey,
      channel: channel,
      merchantid: merchantId,
      purchasenumber: purchasenumber,
      amount: amount,
      cardholdername: 'Juan',
      cardholderlastname: 'Perez',
      cardholderemail: 'jperez@gmail.com',
      usertoken: token,
      expirationminutes: '20',
      timeouturl: 'https://www.micomercio.com/timeout.html',
      merchantlogo: urlLogo,
      merchantname: merchantname,
      formbuttoncolor: colorButton,
      formbuttontext: 'Registrar',
      showamount: 'FALSE',
      complete: (params: any) => {
        console.log(params)
      }
    });

    window?.VisanetCheckout.open()
  }

  /* Effects */

  useEffect(
    () => {
      if (labelSessionKey.length) {
        token = labelToken;
        sessionKey = labelSessionKey;
        callJavascript();
      }
    }, [labelSessionKey]);

  return (
    <div className="card-container">
      <CardComponent idCard={8918165} cvvCard={111} numberCard="5160030000000317" date="03/2028" />
      <h3>Renderizando solicitud Niubiz</h3>
      <input type="button" className="button-add" value={"Agregar tarjeta"} onClick={() => addCard()} />
      <div className="left-text">
        <strong>Token:</strong>
        <div className="wrap-text">{labelToken}</div>
        <strong>SessionKey:</strong>
        <div className="wrap-text">{labelSessionKey}</div>
      </div>
    </div>
  );
};
