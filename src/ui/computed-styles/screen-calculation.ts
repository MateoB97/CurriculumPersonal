
// class ScreenCalculation {
//     private _screenSize: number[];
//     private _screenOrientation: string;
//     private _screenOrientationLock: boolean;
//     private _isLandscape: boolean;
//     private _isPortrait: boolean;

//     constructor() {
//         this._screenSize = getScreenSize();
//         this._screenOrientation = getScreenOrientation();
//         this._screenOrientationLock = getScreenOrientationLock();
//         this._isLandscape = this.screenOrientation === 'landscape';
//         this._isPortrait = this.screenOrientation === 'portrait';
//     }

//     get isLandscape() {
//         return this.isLandscape;
//     }

//     get isPortrait() {
//         return this.isPortrait;
//     }

//     get screenSize() {
//         return this.screenSize;
//     }

//     get screenOrientation() {
//         return this.screenOrientation;
//     }

//     get screenOrientationLock() {
//         return this.screenOrientationLock;
//     }

//     set screenOrientation() {
//         let r = document.querySelector(':root');
//     }

//     getScreenSize() {
//         return {
//             width: window.innerWidth,
//             height: window.innerHeight,
//         };
//     }

//     getScreenOrientation() {
//         return window.screen.orientation.type;
//     }
// }

// export const screenCalculation = new ScreenCalculation();





