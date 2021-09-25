import {Item} from "./itemComponent";
import { render, screen } from '@testing-library/react';

describe("Item", () => {
    it("render Item", () => {
        render(<Item title={"Google"} percent = {0.10} changed = {154.38} price={237.08} />);
        screen.debug();
        expect(screen.queryByRole("treeitem"));
        
    })
});
