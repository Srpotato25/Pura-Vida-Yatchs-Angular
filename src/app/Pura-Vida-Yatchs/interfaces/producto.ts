export interface ProductoJson {
  Id?: number | null;
  ProveedorId?: number | null;
  Nombre?: string | null;
  TipoBien?: string | null;
  Marca?: string | null;
  Capacidad?: number | null;
  Zona?: string | null;
  Caracteristicas?: string | null;
  FotoUrl?: string | null;
  FichaUrl?: string | null;
  PrecioBase?: number | null;
}

export class Producto {
  public readonly id: number | null;
  public readonly proveedorId: number | null;
  public readonly nombre: string;
  public readonly tipoBien: string;
  public readonly marca: string;
  public readonly capacidad: number | null;
  public readonly zona: string | null;
  public readonly caracteristicas: string | null;
  public readonly fotoUrl: string | null;
  public readonly fichaUrl: string | null;
  public readonly precioBase: number | null;

  constructor(data: ProductoJson) {
    this.id = data.Id ?? null;
    this.proveedorId = data.ProveedorId ?? null;
    this.nombre = data.Nombre?.trim() ?? '';
    this.tipoBien = data.TipoBien?.trim() ?? '';
    this.marca = data.Marca?.trim() ?? '';
    this.capacidad = data.Capacidad ?? null;
    this.zona = data.Zona ?? null;
    this.caracteristicas = data.Caracteristicas ?? null;
    this.fotoUrl = data.FotoUrl ?? null;
    this.fichaUrl = data.FichaUrl ?? null;
    this.precioBase = data.PrecioBase ?? null;
  }

  static fromJson(data: ProductoJson): Producto {
    return new Producto(data);
  }
}
