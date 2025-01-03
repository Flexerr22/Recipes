import { Container } from "@/components/shared/container";
import { Information } from "@/components/shared/information";
import { SearchInput } from "@/components/shared/search";
import { SearchBlock } from "@/components/shared/search-block";



export default function Home() {
  return <div className="py-10">
      <Container>
        <SearchInput />
      </Container>

      <Container className="mt-10">
        <Information />
      </Container>

      <Container className="mt-[128px]">
        <SearchBlock />
      </Container>
  </div>
}
