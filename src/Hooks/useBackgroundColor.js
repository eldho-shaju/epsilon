// import { useEffect } from "react";
// import { useRecoilState } from "recoil";
// import { headerColor } from "../Recoil/headerAtom";
// import { bannerImgUrl } from "../Recoil/imageAtom";

// const useBackgroundColor = () => {
//   const [isDarkBackground, setIsDarkBackground] = useRecoilState(headerColor);
//   const [bannerUrl] = useRecoilState(bannerImgUrl);

//   useEffect(() => {
//     // Function to determine brightness of an image
//     const getImageBrightness = (imageSrc) => {
//       return new Promise((resolve) => {
//         const img = new Image();
//         img.src = imageSrc;
//         img.onload = function () {
//           const canvas = document.createElement("canvas");
//           canvas.width = this.width;
//           canvas.height = this.height;
//           const ctx = canvas.getContext("2d");
//           ctx.drawImage(this, 0, 0);
//           const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
//           let brightness = 0;
//           for (let i = 0; i < imageData.data.length; i += 4) {
//             brightness +=
//               imageData.data[i] * 0.299 +
//               imageData.data[i + 1] * 0.587 +
//               imageData.data[i + 2] * 0.114;
//           }
//           brightness = brightness / (imageData.data.length / 4);
//           resolve(brightness);
//         };
//       });
//     };

//     // Replace 'bannerImageSrc' with the actual source of your banner image
//     const bannerImageSrc = "/path/to/your/banner-image.jpg";

//     // Adjust threshold as needed
//     const brightnessThreshold = 127;

//     getImageBrightness(bannerUrl).then((brightness) => {
//       setIsDarkBackground(brightness > brightnessThreshold);
//     });
//   }, [bannerUrl]);

//   return isDarkBackground;
// };

// export default useBackgroundColor;
