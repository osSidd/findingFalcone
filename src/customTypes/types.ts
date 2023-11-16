export type planetObj = {
    name: string,
    distance: number,
    clicked:boolean,
    vehicle: string,
}

export type vehicleObj = {
    name: string,
    total_no: number,
    max_distance: number,
    speed: number,
    img:string,
}

export type planetVehicle = {
    planet: string,
    vehicle: string,
}

export type mainObj = {
    planets: planetObj[];
    planetCount: number;
    vehicles: vehicleObj[];
    planetReached: planetVehicle[];
    timeTaken: number;
    handleDragOver: (e: React.DragEvent) => void;
    handleDragStart: (e: React.DragEvent, index: number) => void;
    handleDrop: (e: React.DragEvent) => void;
    selectPlanet: (e: React.SyntheticEvent, name: string, index: number) => void;
    reset: () => void
}

export type resultObj = {
    planet_name: string,
    status: string,
    error: string,
}

export type result = {
    getResult: () => Promise<resultObj>
    timeTaken: number,
    reset: () => void
}
