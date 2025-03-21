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
export const createCentroTrabajo = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!escalafon) {
      res.status(500).json({ message: "Error de conexión con la base de datos" });
      return;
    }

    const { id_cct, Nombre, Clave, Domicilio } = req.body;

    if (!Nombre ||!Clave || !Domicilio) {
      res.status(400).json({ message: "Nombre y dirección son obligatorios" });
      return;
    }

    let centroTrabajo;
    let created = false;

    if (id_cct) {
      // Si hay ID, busca y actualiza
      centroTrabajo = await escalafon.centro_trabajo.findByPk(id_cct);
      if (centroTrabajo) {
        await centroTrabajo.update({ Nombre,Clave,Domicilio });
      } else {
        // Si no existe con ese ID, crea uno nuevo
        centroTrabajo = await escalafon.centro_trabajo.create({ id_cct, Nombre,Clave,Domicilio });
        created = true;
      }
    } else {
      // Si no hay ID, crea uno nuevo
      centroTrabajo = await escalafon.centro_trabajo.create({  Nombre,Clave,Domicilio  });
      created = true;
    }

    res.status(created ? 201 : 200).json({
      message: created ? "Centro de trabajo creado" : "Centro de trabajo actualizado",
      centroTrabajo
    });
  } catch (error) {
    console.error("Error al crear/actualizar el centro de trabajo:", error);
    res.status(500).json({ message: "Error en el servidor" });
  }
};

// Obtener todos los centros de trabajo

export const getAllCentrosTrabajo = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!escalafon) {
      res.status(500).json({ message: "Error de conexión con la base de datos" });
      return;
    }

    const centros_trabajo = await escalafon.centro_trabajo.findAll();
 
    res.status(200).json({
     centros_trabajo
    });
  } catch (error) {
    console.error("Error al obtener los centros de trabajo:", error);
  }

};