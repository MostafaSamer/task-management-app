import Card from "components/molecules/Card";

export default {
    title: 'Components/molecules/Card',
    component: Card,
    parameters: {
        layout: 'fullscreen',
    },
}

export const story = {
    args: {
        title: "Card",
        children: <h5>children</h5>
    }
};