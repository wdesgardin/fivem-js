import { Entity } from './';

export class Prop extends Entity {
  public static fromHandle(handle: number): Prop {
    if (GetEntityType(handle) == 3) {
      return new Prop(handle);
    }

    return null;
  }

  public static fromNetworkId(networkId: number): Prop | null {
    return this.fromHandle(NetworkGetEntityFromNetworkId(networkId));
  }

  public static exists(prop: Prop): boolean {
    return typeof prop !== 'undefined' && prop.exists();
  }

  constructor(handle: number) {
    super(handle);
  }

  public exists(): boolean {
    return super.exists() && GetEntityType(this.handle) === 3;
  }

  public placeOnGround(): void {
    PlaceObjectOnGroundProperly(this.handle);
  }
}
