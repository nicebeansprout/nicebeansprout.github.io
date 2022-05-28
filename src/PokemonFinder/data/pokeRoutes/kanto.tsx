export enum ROUTE_TYPE {
  "Terrain",
  "Sea"
}

export type PokemonRouteData = {
  name: string;
  id: string;
  svg_data: string;
  location: {
    x: number,
    y: number
  },
  type: ROUTE_TYPE
}

const data: PokemonRouteData[] = [
  {
    name: "23",
    id: "kanto-route-23-area",
    svg_data: "M10.0,4.999 L10.0,599.0 ",
    location: { x: 255, y: 72 },
    type: ROUTE_TYPE.Terrain
  },
  {
    name: "2",
    id: "kanto-route-2-area",
    svg_data: "M10.0,4.999 L10.0,358.0 ",
    location: { x: 500, y: 314},
    type: ROUTE_TYPE.Terrain
  },
  {
    name: "22",
    id: "kanto-route-22-area",
    svg_data: "M253.0,10.0 L4.999,10.0 ",
    location: { x: 255, y: 663},
    type: ROUTE_TYPE.Terrain
  },
  {
    name: "1",
    id: "kanto-route-1-area",
    svg_data: "M10.0,4.999 L10.0,288.0 ",
    location: { x: 500, y: 660},
    type: ROUTE_TYPE.Terrain
  },
  {
    name: "20",
    id: "kanto-route-20-area",
    svg_data: "M5.0,9.999 L567.999,9.999 ",
    location: { x: 462, y: 1338},
    type: ROUTE_TYPE.Sea
  },
  {
    name: "18",
    id: "kanto-route-18-area",
    svg_data: "M302.999,57.0 L10.0,57.0 L10.0,4.999 ",
    location: { x: 738, y: 1105},
    type: ROUTE_TYPE.Sea
  },
  {
    name: "21",
    id: "kanto-route-21-area",
    svg_data: "M47.0,4.999 L47.0,245.0 L9.999,245.0 L9.999,402.0 ",
    location: { x: 463, y: 947},
    type: ROUTE_TYPE.Sea
  },
  {
    name: "16",
    id: "kanto-route-16-area",
    svg_data: "M253.0,10.0 L4.999,10.0 ",
    location: { x: 738, y: 456},
    type: ROUTE_TYPE.Terrain
  },
  {
    name: "6",
    id: "kanto-route-6-area",
    svg_data: "M10.0,4.999 L10.0,276.0 ",
    location: { x: 1342, y: 512 },
    type: ROUTE_TYPE.Terrain
  },
  {
    name: "17",
    id: "kanto-route-17-area",
    svg_data: "M10.0,5.0 L10.0,650.999 ",
    location: { x: 738, y: 456},
    type: ROUTE_TYPE.Terrain
  },
  {
    name: "5",
    id: "kanto-route-5-area",
    svg_data: "M10.0,5.0 L10.0,264.999 ",
    location: { x: 1342, y: 255},
    type: ROUTE_TYPE.Terrain
  },
  {
    name: "7",
    id: "kanto-route-7-area",
    svg_data: "M10.0,4.999 L10.0,62.0 L372.999,62.0 ",
    location: { x: 982, y: 457},
    type: ROUTE_TYPE.Terrain
  },
  {
    name: "3",
    id: "kanto-route-3-area",
    svg_data: "M5.0,103.999 L417.999,103.999 L417.999,5.0 ",
    location: { x: 500, y: 214},
    type: ROUTE_TYPE.Terrain
  },
  {
    name: "25",
    id: "kanto-route-25-area",
    svg_data: "M5.0,10.0 L326.999,10.0 ",
    location: { x: 1342, y: 75},
    type: ROUTE_TYPE.Terrain
  },
  {
    name: "24",
    id: "kanto-route-24-area",
    svg_data: "M10.0,183.999 L10.0,5.0 ",
    location: { x: 1342, y: 75},
    type: ROUTE_TYPE.Terrain
  },
  { 
    name: "13",
    id: "kanto-route-13-area",
    svg_data: "M5.0,10.0 L407.999,10.0 ",
    location: { x: 1458, y: 1007},
    type: ROUTE_TYPE.Terrain
  },
  {
    name: "12",
    id: "kanto-route-12-area",
    svg_data: "M9.999,4.999 L9.999,49.999 L65.0,49.999 L65.0,503.0 ",
    location: { x: 1800, y: 514},
    type: ROUTE_TYPE.Terrain
  },
  {
    name: "14",
    id: "kanto-route-14-area",
    svg_data: "M10.0,4.999 L10.0,155.0 ",
    location: { x: 1458, y: 1007},
    type: ROUTE_TYPE.Terrain
  },
  {
    name: "8",
    id: "kanto-route-8-area",
    svg_data: "M5.0,10.0 L464.999,10.0 ",
    location: { x: 1342, y: 512},
    type: ROUTE_TYPE.Terrain
  },
  {
    name: "15",
    id: "kanto-route-15-area",
    svg_data: "M4.999,10.0 L437.0,10.0 ",
    location: { x: 1026, y: 1156},
    type: ROUTE_TYPE.Terrain
  },
  {
    name: "11",
    id: "kanto-route-11-area",
    svg_data: "M5.0,10.0 L518.999,10.0 ",
    location: { x: 1342, y: 787},
    type: ROUTE_TYPE.Terrain
  },
  {
    name: "10",
    id: "kanto-route-10-area",
    svg_data: "M10.0,264.0 L10.0,4.999 ",
    location: { x: 1800, y: 256},
    type: ROUTE_TYPE.Terrain
  },
  {
    name: "9",
    id: "kanto-route-9-area",
    svg_data: "M463.0,10.0 L4.999,10.0 ",
    location: { x: 1342, y: 255},
    type: ROUTE_TYPE.Terrain
  },
  {
    name: "4",
    id: "kanto-route-4-area",
    svg_data: "M367.0,55.999 L9.999,55.999 L9.999,5.0 ",
    location: { x: 985, y: 207},
    type: ROUTE_TYPE.Terrain
  },
  {
    name: "19",
    id: "kanto-route-19-area",
    svg_data: "M10.0,5.0 L10.0,183.999 ",
    location: { x: 1026, y: 1156},
    type: ROUTE_TYPE.Sea
  }
];

export default data;