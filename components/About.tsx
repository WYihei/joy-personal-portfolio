"use client"

import React from "react"
import { motion } from "framer-motion"
import SectionHeading from "./SectionHeading"
import { useSectionInView } from "@/lib/hooks"
import { useLocale, useTranslations } from "next-intl"

export default function About() {
  const { ref } = useSectionInView("About")
  const t = useTranslations("AboutSection")
  const sectionLan = useTranslations("SectionName")
  const activeLocale = useLocale()

  return (
    <motion.section
      ref={ref}
      className="mb-50 max-w-[45rem] text-start leading-8 sm:mb-40 scroll-mt-28 mb-28 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{sectionLan("about")}</SectionHeading>
      {activeLocale == "zh" ? (
        // <p>{t("desc")}</p> //这样一段话没法分段
        <div className="flex flex-col gap-2">
          <div>同事说我是<b><big>知识储备广、技术扎实、乐于分享、沟通顺畅</big></b>的人</div>
          <div>朋友说我是一个<b><big>靠谱、踏实</big></b>的人</div>
          <div>女朋友说我是一个<b><big>情绪稳定</big></b>的人</div>
          <div>MBTI说我曾经是一个<b><big>INTJ</big></b>的人，但是现在是<b><big>ISTJ</big></b>的人</div>
          <div>我自认为我是一个<b><big>追求卓越</big></b>的人。</div>
          <div>研究生毕业后我追随校招时的面试官，来到了上海的设计院工作，这段时间里我有很多美好的回忆，养了猫，谈了女朋友，系统的学了编程</div>
          <div>后来我那最初的面试官有了一些想法，有了一些力量，一呼百应，我们成立了新公司。那段时间，是理想，是奋斗，是迷茫，是妥协。和大家一起走南闯北，也游山玩水。</div>
          <div>再后来，我不满足于重复的工作内容，技术能力的停滞不前，以及希望的渺茫，选择了退出，来到了现在这家充满惊喜的公司，有人生导师，有惺惺相惜的同事，有海量的新知识让我学习</div>
          <div>未完待续</div>

        </div>
      ) : (
        <>
          <p className="mb-3">
            My journey into programming kicked off during my undergrad in
            <span className="font-medium italic">
              {" "}
              Digital Publishing
            </span> at {}
            <span className="italic underline">
              <a
                href="https://en.wikipedia.org/wiki/Wuhan_University"
                target="_blank"
              >
                Wuhan University.
              </a>
            </span>{" "}
            As a freshman, I got my feet wet with the basics of computer
            science, databases, and Python. But what truly sparked my passion
            was a course on semantic publishing—there, I used HTML and CSS to
            create a webpage dedicated to my favorite figure skater,{" "}
            <a
              href="https://en.wikipedia.org/wiki/Yuzuru_Hanyu"
              target="_blank"
              className="italic underline"
            >
              Yuzuru Hanyu.{" "}
            </a>
            This experience opened my eyes to the charm of web development———
            <span className="font-medium italic">
              literally, you can build anything you envision with code.
            </span>
          </p>

          <p className="mb-3">
            I sharpened my front-end development skills through internships at
            Internships at Wuhan University&apos;s Big Data Institute and later
            at{" "}
            <span className="italic underline">
              <a href="https://www.nio.com/careers" target="_blank">
                {" "}
                NIO Inc.
              </a>
            </span>{" "}
            Working closely with developers, designers, testers, and product
            managers, I loved the buzz of a team pulling together to make our
            product better. And there’s nothing quite like the thrill of seeing
            my own code being used by thousands—it’s what solidified my decision
            to pursue a career in front-end development.
          </p>

          <p className="mb-3">
            I’m now doing my Masters in
            <span className="font-medium italic"> Computing and IT</span> at the{" "}
            <span className="italic underline">
              <a href="https://www.st-andrews.ac.uk/" target="_blank">
                University of St Andrews.{" "}
              </a>
            </span>
            I thrive on programming challenges and enjoy working with teams to
            solve complex problems. I specialize in technologies such as
            <span className="font-medium italic"> React, Next.js and Vue</span>,
            and have a solid understanding of{" "}
            <span className="font-medium italic">
              JavaScript, TypeScript and HTML/CSS
            </span>
            .{" "}
          </p>

          <p>
            In my spare time, I enjoy exploring new technologies and building
            interesting projects. I also run my social media accounts on
            platforms like Bilibili and Xiaohongshu, where I share tech tips and
            tricks. And when I’m not at the computer, you’ll find me
            <span className="font-medium italic">
              {" "}
              cooking up a storm, catching a movie, or keeping fit with regular
              workouts.
            </span>
          </p>
        </>
      )}
    </motion.section>
  )
}
