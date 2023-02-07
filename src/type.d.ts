// Plantilla del objeto que despues se crea
// interfaz de logica de negocios
export interface Sub {
  nick: string;
  avatar: string;
  subMod: number;
  descripcion?: string;
}

/*Hay dos tipos de interfaces:

interfas de logica de negocios
* este puede ser de que trate la aplicacion

export interface Sub {
  nick: string;
  avatar: string;
  subMod: number;
  descripcion?: string;
}

y el estado:
* Este es estado que contiene la plantilla

interface AppState {
  subs: Array<Sub>;
}



*/
