import { makeAutoObservable } from "mobx";
import {
  defaultDevices,
  defaultTypes,
  defaultBrands,
} from "../data/defaultData";

export default class DevicesStore {
  constructor() {
    this._devices = defaultDevices;
    this._types = defaultTypes;
    this._brands = defaultBrands;
    this._selectedDevices = defaultDevices;
    this._selectedDevice = {};
    this._selectedType = {};
    this._selectedBrand = {};
    this._page = 1;
    this._limit = 12;
    makeAutoObservable(this);
  }

  setDevices(devices) {
    this._devices = devices;
  }

  addDevice(device) {
    this._devices.push(device);
  }

  deleteDevice(id, name) {
    if (id) {
      this._devices = this.devices.filter((device) => device.id !== id);
    } else {
      this._devices = this.devices.filter((device) => device.name !== name);
    }
  }

  setTypes(types) {
    this._types = types;
  }

  addType(type) {
    this._types.push(type);
  }

  deleteType(name) {
    this._types = this.types.filter((type) => type.name !== name);
  }

  setBrands(brands) {
    this._brands = brands;
  }

  addBrand(brand) {
    this._brands.push(brand);
  }

  deleteBrand(name) {
    this._brands = this.brands.filter((brand) => brand.name !== name);
  }

  setSelectedDevices(devices) {
    this._selectedDevices = devices;
  }

  setSelectedDevice(device) {
    this._selectedDevice = device;
  }

  recalculateRating(rating) {
    this._selectedDevice.rating = (
      (this.selectedDevice.rating + rating) /
      2
    ).toFixed(1);
  }

  setSelectedType(type) {
    this._selectedType = type;
  }

  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }

  setPage(page) {
    this._page = page;
  }

  setLimit(limit) {
    this._limit = limit;
  }

  get devices() {
    return this._devices;
  }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get selectedDevices() {
    return this._selectedDevices;
  }

  get selectedDevice() {
    return this._selectedDevice;
  }

  get selectedType() {
    return this._selectedType;
  }

  get selectedBrand() {
    return this._selectedBrand;
  }

  get page() {
    return this._page;
  }

  get limit() {
    return this._limit;
  }
}
