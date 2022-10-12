const cu = path => {
    const originUrl =  window?.location?.origin;
    return (originUrl) + "/images/" + path;
};

export const COMPUTER_BG = cu("computer-bg.jpg")
