import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Image from "next/image";
import styles from "../styles/Home.module.css";

// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");

const Home = () => {
  // Here's how to get the thirdweb SDK instance
  // const sdk = useSDK();
  // Here's how to get a nft collection
  // const { data: program } = useProgram(
  //   your_nft_collection_address,
  //   "nft-collection"
  // );

  return (
    <>
      <div className={styles.container}>
        <div className={styles.iconContainer}>
          <Image
            src="/thirdweb.svg"
            height={75}
            width={115}
            objectFit="contain"
            alt="thirdweb"
          />
          <Image
            width={75}
            height={75}
            src="/sol.png"
            className={styles.icon}
            alt="sol"
          />
        </div>
        <h1 className={styles.h1}>Solana, meet thirdweb 👋</h1>
        <p className={styles.explain}>
          Explore what you can do with thirdweb&rsquo;s brand new{" "}
          <b>
            <a
              href="https://portal.thirdweb.com/solana"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.lightPurple}
            >
              Solana SDK
            </a>
          </b>
          .
        </p>

        <WalletMultiButton />
      </div>
    </>
  );
};

export default Home;
