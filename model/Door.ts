export default class Door {
  private number: number;
  private hasGift: boolean;
  private selected: boolean;
  private open: boolean;

  constructor(
    number: number,
    hasGift: boolean = false,
    selected: boolean = false,
    open: boolean = false,
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

  deselect(): Door {
    const selected = false;
    return new Door(this.number, this.hasGift, selected, this.open);
  }

  alterSelected(): Door {
    const selected = !this.selected_;
    return new Door(this.number, this.hasGift, selected, this.open);
  }

  openDoor(): Door {
    const isOpen = true;
    return new Door(this.number, this.hasGift, this.selected, isOpen);
  }
}
