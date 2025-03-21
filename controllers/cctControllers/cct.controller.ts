import { Request, Response, NextFunction } from "express";
import { getModels } from "../../src/models/modelsEscalafon"; // Importa los modelos

//obtencion de modelos
let escalafon: any;
getModels("escalafon")
  .then((models) => {
    escalafon = models;
  })
  .catch((error) => {
    console.error("Error al inicializar los modelos:", error);
  });


// Simular la inserción de un centro de trabajo
export const createCentroTrabajo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Simular la lógica de inserción
    const nuevoCentroTrabajo = {
      id: 1,
      nombre: "Centro de trabajo de prueba",
      direccion: "Calle Falsa 123"
    };

    res.status(201).json({
      message: "Centro de trabajo insertado correctamente",
      centroTrabajo: nuevoCentroTrabajo
    });
  } catch (error) {
    next(error); // Pasa el error al middleware de manejo de errores
  }
};

// Obtener todos los centros de trabajo
export const getAllCentrosTrabajo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!escalafon) {
      throw new Error("No se pudo establecer la conexión a la base de datos");
    }

    // Obtener todos los centros de trabajo usando el modelo
    const centrosTrabajo = await escalafon.CentroTrabajo.findAll();

    // Retornar los centros de trabajo en formato JSON
    res.status(200).json({
      message: "Centros de trabajo obtenidos correctamente",
      centrosTrabajo: centrosTrabajo
    });
  } catch (error) {
    console.error("Error al obtener los centros de trabajo:", error);
    next(error); // Pasa el error al middleware de manejo de errores
  }
};