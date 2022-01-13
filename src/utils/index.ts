export { Color } from './Color';
export { Crypto } from './Crypto';
export { enumValues } from './enumValues';
export { getStringFromUInt8Array } from './getStringFromUInt8Array';
export { getUInt32FromUint8Array } from './getUInt32FromUint8Array';
export { LiteEvent } from './LiteEvent';
export { Maths } from './Maths';
export { Point } from './Point';
export { PointF } from './PointF';
export { Quaternion } from './Quaternion';
export { Size } from './Size';
export { String } from './String';
export { Vec3, Vector3 } from './Vector3';

export const Wait = (milliseconds: number): Promise<void> =>
  new Promise(resolve => setTimeout(resolve, milliseconds));

export const IsClient = (): boolean => {
  return typeof IsDuplicityVersion == 'function' && !IsDuplicityVersion();
};
