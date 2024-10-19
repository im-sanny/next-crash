import Button from "@/app/component/Button";
import Image from "next/image";
import b2 from "@/public/images/b2.jpg";

const mission = () => {
  return (
    <main className="mt-10">
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        nostrum odio accusantium corporis voluptatem illum vel optio assumenda
        sit beatae fugiat deleniti nobis eligendi reprehenderit minus iste
        officiis sint, ab debitis dolores dolor laboriosam! Consequuntur,
        corporis qui obcaecati, maiores mollitia dignissimos veniam soluta ex
        numquam consectetur suscipit magni amet omnis.
      </div>
      <Image placeholder="blur" src={b2} alt="bear image" />
      <Button />
    </main>
  );
};

export default mission;
