import { MetaHeading, MetaSubtitle } from '../../core/metads/typography';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="p-5">
      <div
        style={{ height: '100vh' }}
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 0 }}
          className="d-flex justify-content-center align-items-center"
        >
          <MetaHeading>Projeto Meta DS </MetaHeading>
        </motion.div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: .6 }}
          transition={{ duration: 2, delay: 0.3 }}
          className="d-flex justify-content-center align-items-center"
        >
          <MetaSubtitle>Gabriel Nascimento</MetaSubtitle>
        </motion.div>
      </div>
    </div>
  );
}
