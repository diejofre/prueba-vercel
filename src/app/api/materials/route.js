import connectMongoDB from "@/libs/mongodb";
import Material from "@/models/material";
import { NextResponse } from "next/server";

export const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export const GET = async () => {
  await connectMongoDB();
  const materials = await Material.find({});
  return NextResponse.json(materials, { headers: corsHeaders });
};

export const POST = async (req) => {
  const {
    nivel,
    privilegios,
    tipo,
    titulo,
    urlImagen,
    urlTitulo,
    palabrasClave,
    descripcion,
  } = await req.json();
  await connectMongoDB();
  await Material.create({
    nivel,
    privilegios,
    tipo,
    titulo,
    urlImagen,
    urlTitulo,
    palabrasClave,
    descripcion,
  });
  return NextResponse.json({ message: "Material Created" }, { status: 201 });
};
