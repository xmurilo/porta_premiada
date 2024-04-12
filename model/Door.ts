export default class DoorModel {
  private number: number;
  private hasGift: boolean;
  private selected: boolean;
  private open: boolean;

  constructor(
    number: number,
    hasGift = false,
    selected = false,
    open = false,
  ) {
    this.number = number;
    this.hasGift = hasGift;
    this.selected = selected;
    this.open = open;
  }

  get number_(): number {
    return this.number;
  }

  get hasGift_(): boolean {
    return this.hasGift;
  }

  get selected_(): boolean {
    return this.selected;
  }

  get open_(): boolean {
    return this.open;
  }
  
  get closed_(): boolean {
    return !this.open;
  }

  deselect(): DoorModel {
    const selected = false;
    return new DoorModel(this.number, this.hasGift, selected, this.open);
  }

  alterSelected(): DoorModel {
    const selected = !this.selected_;
    return new DoorModel(this.number, this.hasGift, selected, this.open);
  }

  openDoor(): DoorModel {
    const isOpen = true;
    return new DoorModel(this.number, this.hasGift, this.selected, isOpen);
  }
}
