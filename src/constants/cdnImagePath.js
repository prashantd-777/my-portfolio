const cu = path => {
    const originUrl =  window?.location?.origin;
    return (originUrl) + "/images/" + path;
};

const cuPDF = path => {
    const originUrl =  window?.location?.origin;
    return (originUrl) + "/pdf/" + path;
};

export const RESUME_BG = cu("resume-bg.jpg");
export const RED_HEART = cu("red-heart.svg");
export const PROFILE_IMG = cu("profile.png");
export const PRASHANT_RESUME = cuPDF("prashant-resume.pdf");
