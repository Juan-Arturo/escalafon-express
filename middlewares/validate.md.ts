import axios from "axios";
import { Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { env } from "process";

// Definición del middleware `validateJwt` mejorado
const validateJwt = (req: any, res: Response, next: NextFunction): void => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  
  if (!token) {
    res.status(401).json({ msg: "No se proporcionó token" });
    return;
  }

  axios.get(`${process.env.PROMEETE_API}/auth/isAuthorization/${token}`)
    .then(response => {
      if (response.status === 200) {
        next();
      } else {
        res.status(401).json({ msg: "Token no válido" });
      }
    })
    .catch(error => {
      if (error.response && error.response.status === 401) {
        res.status(401).json({ msg: "Token no válido" });
      } else {
        res.status(500).json({ msg: "Error en la validación del token" });
      }
    });
};

export { validateJwt };


/*
// Definición del middleware `validateJwt` mejorado
const validateJwt = async (
  req: any,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({
      msg: "No hay token en la petición",
    });
  }

  try {
    // Realizando una petición GET con Axios
    axios
      .get(`${process.env.PROMEETE_API}/auth/isAuthorization/${token}`)
      .then((response) => {
        if (response.status == 200) {
          next();
        }
      });
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).json({
        msg: "Token expirado",
      });
    }
    return res.status(401).json({
      msg: "Token no válido",
    });
  }
};

export { validateJwt };*/