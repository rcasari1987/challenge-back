import { FastifyPluginAsync } from "fastify";
import { getWeather } from "../../services/weather";
import { LatLng } from "../../types/location";

const weather: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get<{ Querystring: LatLng }>("/", async function (request, reply) {
    try {
      const location = request.query;

      const weatherResponse = await getWeather(location.lat, location.lng);

      const temp = weatherResponse?.current?.temp > 15;

      return reply.code(200).send(temp);
    } catch (error) {
      request.log.error(error);
      return reply.send(400);
    }
  });
};

export default weather;
