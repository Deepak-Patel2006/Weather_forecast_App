import { call_info } from "./service.js";

export const call_api = async (req, res, next) => {
  try {
    console.log(req.query.title);

    const data = await call_info(req.query.title);

    console.log("CONTROLLER HIT");

    if (!data.error) {
      return res.status(201).json({
        success: true,
        message: "Weather fetched successfully",
        name: data.location.name,
        local: data.location.localtime,
        condition: data.current.condition,
        tempreture: data.current.temp_c,
        wind_speed: data.current.wind_kph,
        pressures: data.current.pressure_in,
        humidit: data.current.humidity,
        cloud: data.current.cloud,
        feels: data.current.feelslike_c,
        chance: data.current.chance_of_rain,
      });
    }
    res.status(401).json({
      success: false,
      message: "No matching location found !!!",
    });
  } catch (error) {
    next(error);
  }
};
