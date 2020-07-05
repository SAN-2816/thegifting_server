import request from "request";

export const getDelivery = async (req, res, next) => {
  const {
    query: { t_code, t_invoice },
  } = req;
  try {
    //t_code: 택배사코드, t_invoice: 운송장 번호
    //대한통운: 04, 한진택배: 05, 경동택배: 23
    const t_key = "37aYLsZPL1Ype1wcIGJvNg";
    const url =
      "http://info.sweettracker.co.kr/api/v1/trackingInfo?t_key=" +
      t_key +
      "&t_code=" +
      t_code +
      "&t_invoice=" +
      t_invoice;
    const option = {
      url: url,
      method: "GET",
      json: true,
    };

    console.log(option);
    request(option, function (error, response, body) {
      //
      const json = JSON.stringify(body);
      console.log(json);
      res.send({
        message: json,
      });
      res.end();
    });
  } catch (error) {}
};
