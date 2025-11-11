/*
 * @description H5工具函数
 * @Author: anyuan
 * @Date: 2025-08-07 10:34:46
 */
import { getDeviceType } from "@anyuan/utils";

// 定义用户信息接口（根据实际情况调整）
export interface UserInfo {
  // 根据实际返回的用户信息字段定义
  [key: string]: any;
}

// 定义扫码信息接口（根据实际情况调整）
export interface ScanCodeInfo {
  // 根据实际返回的扫码信息字段定义
  [key: string]: any;
}

/**
 * @description 调用app的方法，根据设备类型区分
 * @param {String} funName 函数名称
 * @param {String} callbackName 回调函数名称
 * @example callAppFn('outH5APP')
 */
export function callAppFn(funName: string, callbackName?: string | null): void {
  const { mobileType } = getDeviceType();
  const isIOS = mobileType === "iOS";
  if (isIOS) {
    try {
      if ((window as any).webkit?.messageHandlers[funName]) {
        (window as any).webkit.messageHandlers[funName].postMessage(
          callbackName
        );
      } else {
        throw new Error(`未能找到IOS版本 ${funName} 方法`);
      }
    } catch (error) {
      const msg = `未能找到IOS版本${funName}方法`;
      throw new Error(msg);
    }
  } else {
    try {
      if (
        (window as any).Android &&
        typeof (window as any).Android[funName] === "function"
      ) {
        (window as any).Android[funName](callbackName);
      } else {
        throw new Error(`未能找到Android版本 ${funName} 方法`);
      }
    } catch (error) {
      const msg = `未能找到Android版本${funName}方法`;
      throw new Error(msg);
    }
  }
}

/**
 * @description 返回APP
 * @example outH5APP()
 */
export function outH5APP(): void {
  callAppFn("outH5APP");
}

/**
 * @description 获取用户信息
 * @example getUserInfo().then(userInfo => console.log(userInfo))
 */
export function getUserInfo(): Promise<UserInfo> {
  return new Promise((resolve, reject) => {
    // 设置回调函数
    (window as any).receiveUserInfo = (userInfo: string) => {
      try {
        const parsedInfo: UserInfo = JSON.parse(userInfo);
        resolve(parsedInfo);
      } catch (error) {
        reject("解析用户信息失败");
      }
      // 清理回调函数
      delete (window as any).receiveUserInfo;
    };

    try {
      callAppFn("getUserInfo", "receiveUserInfo");
    } catch (error) {
      console.log("error: ", error);
      reject("系统异常");
    }
  });
}

/**
 * @description 获取扫码信息
 * @example getScanCodeInfo().then(res => console.log(res))
 */
export function getScanCodeInfo(): Promise<ScanCodeInfo> {
  return new Promise((resolve, reject) => {
    // 设置回调函数
    (window as any).receiveScanInfo = (scanCodeInfo: string) => {
      try {
        const parsedInfo: ScanCodeInfo = JSON.parse(scanCodeInfo);
        resolve(parsedInfo);
      } catch (error) {
        reject("解析扫码信息失败");
      }
      // 清理回调函数
      delete (window as any).receiveScanInfo;
    };

    try {
      callAppFn("scanQRCode", "receiveScanInfo");
    } catch (error) {
      console.log(error);
      reject("系统异常");
    }
  });
}
