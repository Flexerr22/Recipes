import { Container } from "@/components/shared/container";
import { Information } from "@/components/shared/information";
import { SearchInput } from "@/components/shared/search";



export default function Home() {
  return <>
      <Container>
        <SearchInput />
        <Information />
      </Container>
  </>
}
