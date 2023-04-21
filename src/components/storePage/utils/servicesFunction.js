// Проверка объекта на пустоту.

export const isEmpty = (obj) => {
  if (obj instanceof Array) {
    for (let elem of obj) {
      return false;
    }
    return true;
  } else {
    for (let key in obj) {
      return false;
    }
    return true;
  }
};

// Добавить 0 к данным даты.

export const addZero = (count) => {
  if (count < 10) {
    return "0" + count;
  }

  return count;
};

// Рассчитать данные для поля ИТОГО в OrderItem.

export const calculateDataForFieldTotalPageOrderItem = (records) => {
  let totalCount = 0;
  let totalSum = 0;

  for (let record of records) {
    const sum = record.count * record.price;

    totalCount += record.count;
    totalSum += sum;
  }

  return { totalCount, totalSum };
};

// Вернуть тип или бренд.

export const getBrandType = (types, brands, typeId = null, brandId = null) => {
  let value;

  if (typeId) {
    value = types.find((item) => item.id === typeId);
  } else {
    value = brands.find((item) => item.id === brandId);
  }

  return value.name;
};

// Авторизация пользователя.

export const logIn = (users, email, password) => {
  if (!email || !password) {
    throw Error("Пожалуйста, введите email и password!");
  }

  const user = users.find((user) => user.email === email);

  if (!user) {
    throw Error(
      "Пользователь с таким email не обнаружен! Проверьте email или зарегестрируйтесь!"
    );
  }

  let comparePassword = password === user.password;

  if (!comparePassword) {
    throw Error("Указан неверный пароль!");
  }

  return user;
};

// Регистрация пользователя.

export const registerUser = (users, email, password) => {
  try {
    const lastId = users[users.length - 1].id;

    const newUser = {
      id: lastId + 1,
      email,
      password,
      role: "USER",
      orders: [],
      pendingPurchases: [],
      ratings: [],
    };

    return newUser;
  } catch (e) {
    throw Error("Непредвиденная ошибка регистрации пользователя!");
  }
};

// Создать заказ.

export const createOrder = (user, devices) => {
  let lastOrderId = 0;

  if (user.orders.length) {
    lastOrderId = user.orders[user.orders.length - 1].id;
  }

  const date = new Date();

  const created = `${addZero(date.getDate())}.${addZero(
    date.getMonth() + 1
  )}.${date.getFullYear()}`;

  const orderDevices = devices.map((device) => ({
    id: device.id,
    count: device.count,
    price: device.price,
  }));

  return {
    id: lastOrderId + 1,
    created,
    devices: orderDevices,
  };
};

// Создать неосуществлённую покупку.

export const createPendingPurchase = (user, devices) => {
  let lastOrderId = 0;

  if (user.pendingPurchases.length) {
    lastOrderId = user.pendingPurchases[user.pendingPurchases.length - 1].id;
  }

  const date = new Date();

  const created = `${addZero(date.getDate())}.${addZero(
    date.getMonth() + 1
  )}.${date.getFullYear()}`;

  const deviceIds = devices.map((device) => device.id);

  return {
    id: lastOrderId + 1,
    created,
    deviceIds,
  };
};

// Создать тип или бренд.

export const createTypeBrand = (types, name) => {
  const lastId = types[types.length - 1].id;

  return {
    id: lastId + 1,
    name,
  };
};

// Проверка "выбран ли (тип, бренд, устройство)?"

export const whetherSelected = (checkObject, name, id) => {
  if (id) {
    return checkObject.id === id;
  }

  return checkObject.name === name;
};

// Изменить выбранные устройства для каталога типа и бренда.

export const changeSelectedDevices = (devices, typeId, brandId) => {
  const cloneDevices = devices.map((device) => ({ ...device }));
  let selectedDevices;

  if (!typeId && !brandId) {
    return cloneDevices;
  }

  if (typeId && !brandId) {
    selectedDevices = cloneDevices.filter((device) => device.typeId === typeId);
    return selectedDevices;
  }

  if (!typeId && brandId) {
    selectedDevices = cloneDevices.filter(
      (device) => device.brandId === brandId
    );
    return selectedDevices;
  }

  if (typeId && brandId) {
    selectedDevices = cloneDevices.filter(
      (device) => device.typeId === typeId && device.brandId === brandId
    );
    return selectedDevices;
  }
};
