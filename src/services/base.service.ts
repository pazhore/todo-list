import axios from "axios";
export const baseApi = async (method: string, url: string, body: any, header: any) => {

  let reqConfig = {
    method,
    url,
    data: body,
    headers: header ? header : { "content-Type": "application/json" }
  }
  if (body) {
    reqConfig = {
      method,
      url,
      data: body,
      headers: header ? header : { "content-Type": "application/json" }
    }
  } else {
    delete reqConfig.data
  }
  return await axios(reqConfig).then(
    (result) => {
      return result.data
    }
  ).catch((error) => {
    return error
  })
}