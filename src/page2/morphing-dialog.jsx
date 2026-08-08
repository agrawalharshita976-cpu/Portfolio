"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { useClickAway } from "react-use";
import { XIcon } from "lucide-react";

const MorphingDialogContext = createContext(undefined);

export function MorphingDialog({ children, transition }) {
  const [isOpen, setIsOpen] = useState(false);
  const uniqueId = useId();
  const triggerRef = useRef(null);

  return (
    <MorphingDialogContext.Provider
      value={{ isOpen, setIsOpen, uniqueId, triggerRef, transition }}
    >
      <MotionConfig transition={transition}>{children}</MotionConfig>
    </MorphingDialogContext.Provider>
  );
}

export function MorphingDialogTrigger({ children, className, style }) {
  const { setIsOpen, uniqueId, triggerRef } = useContext(MorphingDialogContext);

  return (
    <motion.div
      ref={triggerRef}
      layoutId={`dialog-${uniqueId}`}
      onClick={() => setIsOpen(true)}
      className={`cursor-pointer ${className}`}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export function MorphingDialogContainer({ children }) {
  const { isOpen } = useContext(MorphingDialogContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {children}
        </div>
      )}
    </AnimatePresence>
  );
}

export function MorphingDialogContent({ children, className, style }) {
  const { setIsOpen, uniqueId } = useContext(MorphingDialogContext);
  const containerRef = useRef(null);

  useClickAway(containerRef, () => setIsOpen(false));

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
      />
      <motion.div
        ref={containerRef}
        layoutId={`dialog-${uniqueId}`}
        className={className}
        style={style}
      >
        {children}
      </motion.div>
    </>
  );
}

export function MorphingDialogTitle({ children, className }) {
  const { uniqueId } = useContext(MorphingDialogContext);
  return (
    <motion.h2 layoutId={`dialog-title-${uniqueId}`} className={className}>
      {children}
    </motion.h2>
  );
}

export function MorphingDialogSubtitle({ children, className }) {
  const { uniqueId } = useContext(MorphingDialogContext);
  return (
    <motion.p layoutId={`dialog-subtitle-${uniqueId}`} className={className}>
      {children}
    </motion.p>
  );
}

export function MorphingDialogDescription({
  children,
  className,
  disableLayoutAnimation,
  variants,
}) {
  return (
    <motion.div
      initial={variants?.initial || { opacity: 0 }}
      animate={variants?.animate || { opacity: 1 }}
      exit={variants?.exit || { opacity: 0 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MorphingDialogImage({ src, alt, className }) {
  const { uniqueId } = useContext(MorphingDialogContext);
  return (
    <motion.img
      layoutId={`dialog-img-${uniqueId}`}
      src={src}
      alt={alt}
      className={className}
    />
  );
}

export function MorphingDialogClose({ className }) {
  const { setIsOpen } = useContext(MorphingDialogContext);
  return (
    <button
      onClick={() => setIsOpen(false)}
      className={`absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors ${className}`}
    >
      <XIcon size={20} />
    </button>
  );
}
