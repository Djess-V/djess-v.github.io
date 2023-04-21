import { makeAutoObservable } from "mobx";

export default class BasketStore {
  constructor() {
    this._totalCount = 0;
    this._basketDevices = [];
    this._remoteDevices = [];
    makeAutoObservable(this);
  }

  setTotalCount(totalCount, count = undefined) {
    if (count || count === 0) {
      this._totalCount = this.totalCount - count;
    } else {
      this._totalCount = totalCount;
    }
  }

  setBasketDevice(device) {
    const newDevice = { ...device };
    newDevice.count = 1;

    this._basketDevices.push(newDevice);
    this._totalCount = this.totalCount + 1;
  }

  removeBasketDevice(device) {
    const remoteDevice = { ...device };
    remoteDevice.count = 1;

    this._remoteDevices.push(remoteDevice);
    this._basketDevices = this.basketDevices.filter(
      (item) => item.id !== device.id
    );

    this._totalCount = this.totalCount - device.count;
  }

  reestablishBasketDevice(device) {
    const restoredDevice = { ...device };

    this._totalCount = this.totalCount + 1;
    this._basketDevices.push(restoredDevice);

    this._remoteDevices = this.remoteDevices.filter(
      (item) => item.id !== device.id
    );
  }

  setBasketDevices(devices) {
    this._basketDevices = devices;
  }

  changeCountBasketDevice(id, bool) {
    const device = this.basketDevices.find((item) => item.id === id);

    if (bool) {
      device.count = device.count + 1;
      this._totalCount = this.totalCount + 1;
    } else if (!bool && device.count > 1) {
      device.count = device.count - 1;
      this._totalCount = this.totalCount - 1;
    }
  }

  setRemoteDevices(devices) {
    this._remoteDevices = devices;
  }

  emptyTrash() {
    for (let device of this.basketDevices) {
      this.removeBasketDevice(device);
    }
  }

  removeDeviceFromRemoteDevices(device) {
    this._remoteDevices = this.remoteDevices.filter(
      (item) => item.id !== device.id
    );
  }

  get totalCount() {
    return this._totalCount;
  }

  get basketDevices() {
    return this._basketDevices;
  }

  get remoteDevices() {
    return this._remoteDevices;
  }
}
