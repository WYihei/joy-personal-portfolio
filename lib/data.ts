import React from "react";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { BsFillBuildingFill, BsRobot,BsWindowFullscreen} from "react-icons/bs"
import { LuGraduationCap } from "react-icons/lu";
import knowledgeSharingPlatformImage from '@/public/knowledge-sharing-platform.png';
import breadditImage from "@/public/breaddit.png";
import gameHubImage from "@/public/game-hub.png";
import typingSpeedImage from "@/public/typing-speed.png";
import profileCut from "@/public/profile_cut.png";
import plasmaCut from "@/public/plasma_cut.png";
import visualizationImage from "@/public/d3.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experiences",
        hash: "#experience",
    },
    // {
    //     name: "Contact",
    //     hash: "#contact",
    // },
] as const;


export const headerLanguageMap = {
    Home: '首页',
    About: '关于我',
    Projects: '我的项目',
    Skills: '我的技能',
    Experiences: '我的经历',
}

export const experiencesData = [
    {
        title: "MSc in Computing and IT",
        location: "University of St Andrews, UK",
        description:
            "Achieved a Master's degree in Computing and IT, acquiring in-depth knowledge in areas such as Human Computer Interaction, Computer Communication Systems, and Information Security. Developed strong capabilities in computational thinking, user-centred design, and data visualisation, preparing for effective application in technology-driven environments",
        icon: React.createElement(LuGraduationCap),
        date: "2023 Sep - 2024 May",
    },
    {
        title: "Frontend Intern",
        location: React.createElement("span", {},
            React.createElement("a", {
                href: "https://www.nio.com/",
                style: { textDecoration: 'underline' },
                target: "_blank"
            }, "NIO Inc."),
            " Wuhan, China"
        ),
        description:
            "Developed NIO's third-generation station list and detail pages using Vue3, TypeScript, and Baidu Maps API. Implemented role-based access control for the Task Wizard page, enhancing system security. Collaborated effectively within a Jira-managed environment, utilizing Jenkins for deployment processes.",
        icon: React.createElement(FaVuejs),
        date: "2022 Aug - 2022 Dec",
    },
    {
        title: "Frontend Assistant",
        location: "Wuhan University | Wuhan, China",
        description:
            "Developed and maintained Finknow, a Financial Knowledge Graph Query and Analysis Platform using umi (React framework) and Ant Design Pro. Utilized graphin, a React toolkit for graph analysis based on G6, to develop an Equity Network Penetration Graph, enhancing data visualization capabilities.",
        icon: React.createElement(FaReact),
        date: "2022 May - 2022 July",
    },
    {
        title: "BA in Digital Publishing",
        location: "Wuhan University, China",
        description:
            "Graduated with a Bachelor of Arts in Digital Publishing, securing a GPA of 3.81/4.0. Gained foundational knowledge in digital media and publishing technologies.",
        icon: React.createElement(LuGraduationCap),
        date: "2019 Sep - 2023 Jun",
    },

]

export const experiencesDataZn = [
    {
        "title": "土木工程学士",
        "location": "河南大学",
        "description": "度过了懵懂、无忧无虑的四年，人生静止了，仅此而已",
        icon: React.createElement(LuGraduationCap),
        "date": "2012年9月 - 2016年6月"
    },
    {
        "title": "岩土工程硕士",
        "location": "沈阳建筑大学",
        "description": "为了论文学习了编程，给转行做了铺垫",
        icon: React.createElement(LuGraduationCap),
        "date": "2016年9月 - 2019年4月"
    },
    {
        "title": "结构设计师&软件开发工程师",
        "location": "上海杰地建筑设计有限公司",
        "description": `从事建筑结构设计工作，以及建筑结构设计软件的开发工作`,
        "icon": React.createElement(BsFillBuildingFill),
        "date": "2019年5月 - 2021年7月"
    },
    {
        "title": "软件开发工程师",
        "location": "上海非解构科技有限公司（原设计团队创业）",
        "description": `1.承担公司主营软件产品与AutocAD、有限元计算软件SAP2000的交互模块的开发`,
        "icon": React.createElement(BsWindowFullscreen),
        "date": "2021年8月 - 2022年5月"
    },
    {
        "title": "软件开发工程师",
        "location": "上海大界机器人科技有限公司",
        "description": "1、承担型钢项目上位机软件架构、主要开发工作;2、承担坡切项目内与机器人规划组同事的沟通、工作对接；3、承担平板坡切项目单元测试重构;4、承担部分新人指导工作",
        "icon": React.createElement(BsRobot),
        "date": "2022年6月至今"
    }
]


export type ProjectTags = typeof projectsData[number]["tags"];

export const projectsData = [
    {
        "title": "Ethical Digital Nation Collaborative Platform",
        "title_zh": "结构设计工具箱",
        "description":
            "A collaborative platform enhancing cooperation among Scottish higher education institutions in digital ethics.",
        "desc_zh": "在三位建模软件rhino的可视化插件中二次开发的工具包，让参数化设计更加的高效",
        "tags": ["c#", "python", "opennurbs"],
        "imageUrl": knowledgeSharingPlatformImage,
        projectUrl: '',
        demoUrl: '',
    },
    {
        title: "Typing Speed",
        title_zh: 'YJK可视化编程平台',
        description:
            "A comprehensive typing speed test application that tracks your overall typing performance. It provides detailed statistics, including total words typed, errors made, and accuracy rate, allowing users to monitor their progress and improve their typing efficiency.",
        desc_zh: "让非编程开发人员也能体验到编程的便捷，现在已是国内最领先的建筑结构数字智能化设计软件，我主要负责其中与其他设计软件的数据交换模块",
        tags: ["c#", "wpf", "grpc", '多线程','有限元计算'],
        imageUrl: typingSpeedImage,
        projectUrl: '',
        demoUrl: 'https://www.yjk.cn/article/836/',
    },
    {
        title: "Breddit",
        title_zh: "(船舶)型钢切割软件",
        description:
            `A modern full-stack Reddit clone with infinite scrolling, secure NextAuth Google authentication, and a custom feed for authenticated users. It uses Upstash Redis for caching and React-Query for efficient, responsive data fetching with optimistic updates.
            `,
        desc_zh: "服务于国内顶级船舶制造商的型钢切割线上位机软件，三人团队，我负责软件架构、主要开发",
        tags: ["WPF", "ABP", "领域驱动设计", "MySQL", "CGM", "网络通讯", "运动规划"],
        imageUrl: profileCut,
        projectUrl: '',
        demoUrl: 'https://www.roboticplus.com/index/news/details/cate_id/7/id/466.html',
    },
    {
        title: "Global Wealth Spectrum Visualisation",
        title_zh: '平板等离子（火焰）切割软件',
        description: "This interactive visualization explores how tax policies influence wealth, how industries impact fortunes differently by gender, and how these effects vary across continents. Dive into our data to uncover the complex layers of global wealth.",
        desc_zh: "",
        tags: ["ABP", "前后端分离", "单元测试"],
        imageUrl: plasmaCut,
        projectUrl: '',
        demoUrl: 'https://www.roboticplus.com/index/factory/index/cate_id/30.html',
    },
    {
        title: "Global Wealth Spectrum Visualisation",
        title_zh: '飞机大战',
        description: "This interactive visualization explores how tax policies influence wealth, how industries impact fortunes differently by gender, and how these effects vary across continents. Dive into our data to uncover the complex layers of global wealth.",
        desc_zh: "",
        tags: ["Cocos", "TypeScript", "游戏开发", "Stable Diffusion"],
        imageUrl: visualizationImage,
        projectUrl: '',
        demoUrl: 'http://qifei.wochaoyuan.fun:81/',
    },
    {
        title: "Global Wealth Spectrum Visualisation",
        title_zh: 'ROS2机器人',
        description: "This interactive visualization explores how tax policies influence wealth, how industries impact fortunes differently by gender, and how these effects vary across continents. Dive into our data to uncover the complex layers of global wealth.",
        desc_zh: "",
        tags: ["ROS2", "C++", "机器视觉"],
        imageUrl: visualizationImage,
        projectUrl: 'https://github.com/Codefreyy/d3-evolution-visualisation',
        demoUrl: 'https://global-wealth-spectrum.netlify.app/',
    },
    {
        title: "Global Wealth Spectrum Visualisation",
        title_zh: 'ROS2可视化编程平台',
        description: "This interactive visualization explores how tax policies influence wealth, how industries impact fortunes differently by gender, and how these effects vary across continents. Dive into our data to uncover the complex layers of global wealth.",
        desc_zh: "",
        tags: ["ROS2", "C++", "c#","Avalonia"],
        imageUrl: visualizationImage,
        projectUrl: '',
        demoUrl: '',
    },
    {
        title: "Global Wealth Spectrum Visualisation",
        title_zh: '斯坦福小镇复刻',
        description: "This interactive visualization explores how tax policies influence wealth, how industries impact fortunes differently by gender, and how these effects vary across continents. Dive into our data to uncover the complex layers of global wealth.",
        desc_zh: "大语言模型替换为国内免费的百度文心一言平台",
        tags: ["LLM", "PYTHON", "LINUX"],
        imageUrl: visualizationImage,
        projectUrl: 'https://github.com/Codefreyy/d3-evolution-visualisation',
        demoUrl: '',
    },
]

export const skillsData = [
    "C#",
    "WPF",
    "Avalonia",
    "C++",
    "OpenNurbs",
    "CGM",
    "OpenCascade",
    "Git",
    "OMPL",
    "ROS2",
    "Linux",
    "MySQL",
    "SQLite",
    "TypeScript",
    "Cocos"
] 
