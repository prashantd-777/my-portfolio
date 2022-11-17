const cu = path => {
    const originUrl =  window?.location?.origin;
    return (originUrl) + "/images/" + path;
};

export const COMPUTER_BG = cu("computer-bg.jpg");
export const RESUME_BG = cu("resume-bg.jpg");
export const RED_HEART = cu("red-heart.svg");
export const PROFILE_IMG = cu("profile.png");
