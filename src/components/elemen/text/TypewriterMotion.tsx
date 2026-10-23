import { motion, AnimationGeneratorType } from "framer-motion";

interface TypewriterProps {
    text: string;
    delay?: number;
    duration?: number;
    className?: string;
}

const TypewriterMotion = ({
    text,
    delay = 0.5,
    duration = 0.05,
    className = "",
}: TypewriterProps) => {
    const characters = Array.from(text);

    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: delay,
                staggerChildren: duration,
            },
        },
    };

    const characterVariants = {
        hidden: { opacity: 0, y: 5 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring" as AnimationGeneratorType,
                damping: 12,
                stiffness: 200,
            },
        },
    };

    return (
        <div className={`flex items-center ${className}`}>
            <motion.div
                className="font-poppins text-center dark:text-gray-300 text-gray-700"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {characters.map((char, index) => (
                    <motion.span key={index} variants={characterVariants}>
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </motion.div>
        </div>
    );
};

export default TypewriterMotion;
