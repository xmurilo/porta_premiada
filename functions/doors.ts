import DoorModel from "@/model/Door";


export function createDoors(qtd:number, selected:number):DoorModel[] {
    return Array.from({length: qtd}, (_, i) => {
        const number = i + 1;
        const hasGift = number === selected;
        return new DoorModel(number, hasGift);
    });
}

export function updateDoors(doors: DoorModel[], modifiedDoor: DoorModel): DoorModel[]{
  return doors.map((currentDoor) => {
    const sameAsModified = currentDoor.number_ === modifiedDoor.number_

    if(sameAsModified){
      return modifiedDoor
    } else {
      return modifiedDoor.open_ ? currentDoor : currentDoor.deselect()
    }
  })
}