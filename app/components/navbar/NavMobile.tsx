'use client';

import Image from 'next/image';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { motion, Variants } from 'framer-motion';

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="
        relative
        flex
        md:hidden
        flex-row
        items-center
        justify-start
        px-4
    "
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
    >
      <motion.div
        className="cursor-pointer text-white"
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <AiOutlineMenu size="28" />
      </motion.div>
      <div
        className="
          absolute
          left-1/2
          transform
          -translate-x-1/2
        "
      >
        <Image
          src="/images/tesla-logo.png"
          height="200"
          width="200"
          alt="Tesla Logo"
        />
      </div>
      <motion.div
        className="
          absolute
          w-full
          h-screen
          bg-neutral-800
          top-10
          left-0
          px-0
          flex
          flex-col
          items-center
          justify-center
          text-center
          font-semibold
          text-md
          gradient
        "
        variants={{
          open: {
            clipPath: 'inset(0% 0% 0% 0% round 10px)',
            transition: {
              type: 'spring',
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: 'inset(10% 50% 90% 50% round 10px)',
            transition: {
              type: 'spring',
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
      >
        <ul
          className="
            space-y-24
            pb-16
            cursor-pointer
            text-white
          "
        >
          <motion.li
            variants={itemVariants}
            className="hover:text-red-500 transition"
          >
            Model S
          </motion.li>
          <motion.li
            variants={itemVariants}
            className="hover:text-red-500 transition"
          >
            Model 3
          </motion.li>
          <motion.li
            variants={itemVariants}
            className="hover:text-red-500 transition"
          >
            Model X
          </motion.li>
          <motion.li
            variants={itemVariants}
            className="hover:text-red-500 transition"
          >
            Model Y
          </motion.li>
          <motion.li
            variants={itemVariants}
            className="hover:text-red-500 transition"
          >
            Solar Roof
          </motion.li>
          <motion.li
            variants={itemVariants}
            className="hover:text-red-500 transition"
          >
            Solar Panels
          </motion.li>
        </ul>
      </motion.div>
    </motion.nav>
  );
};

export default NavMobile;
