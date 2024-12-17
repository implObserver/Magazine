import { Dropdown } from "#/common/shared/ui/dropdownElement"
import { ResultsContainer } from "#/services/product/entities/resultsContainer"

export const SearchDropdown = () => {
    return (
        <Dropdown>
            <ResultsContainer></ResultsContainer>
        </Dropdown>
    )
}