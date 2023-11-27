import { setActivePinia, createPinia } from "pinia";
import useUserStore from "@/stores/user";

vi.mock("@/includes/firebase", () => ({
    auth: {
        signInWithEmailAndPassword: () => Promise.resolve(), // Mocks the auth.signInWithEmailAndPassword method
    }
})); // Mocks the dependencies

describe("stores", () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    test("authenticates user", async () => {
        const store = useUserStore();

        expect(store.userLoggedIn).not.toBe(true);

        await store.authenticate({});
        expect(store.userLoggedIn).toBe(true)

    });
})