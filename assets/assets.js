import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'Rakshak',
        description: 'Full Stack App',
        bgImage: '/work-1.png',
        link: 'https://rakshak-oze3.onrender.com/'
    },
    {
        title: 'Shortest Path Finder',
        description: 'Web Development',
        bgImage: '/work-2.png',
        link: 'https://mirtariqshortestpath.netlify.app/'
    },
    {
        title: 'TakeAway Food',
        description: 'Web Design',
        bgImage: '/work-3.png',
        link: 'https://food-order-tawny-nine.vercel.app/'
    },
    {
        title: 'Demo Portfolio',
        description: 'UI/UX Design',
        bgImage: '/work-4.png',
        link: 'https://miruddin11.github.io/Mir-s-Portfolio/'
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'LeetCode', description: 'LeetCode (Knight, Rating: 2081): Global ranks: 350/26,000 and 843/30,000.', link: 'https://leetcode.com/u/mirtariq/' },
    { icon: assets.mobile_icon, title: 'GeeksforGeeks', description: 'GeeksforGeeks (Level 4, Rating: 1931 ,Campus Rank: 6): Global rank: 64 , 85/4,000.', link: 'https://www.geeksforgeeks.org/user/mirtariq/' },
    { icon: assets.ui_icon, title: 'Codechef', description: 'CodeChef (5-Star, Rating: 2000): Global ranks: 8, 12, 35/35,000. Ranked 2,300/4.5M users.', link: 'https://www.codechef.com/users/infinity_11' },
    { icon: assets.graphics_icon, title: 'Codeforces', description: 'Codeforces (Specialist, Rating: 1455): Global rank: 114/40,000 in Round 928 (Div 4).', link: 'https://codeforces.com/profile/Nirmali18' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'C++, Java, Python, HTML, CSS, JavaScript, React Js, Next Js, Node Js, Express Js, SQL' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science and Engineering' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 10+ projects' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];