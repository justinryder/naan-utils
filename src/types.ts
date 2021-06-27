export type Func<T extends any[], U> = (...args: T) => U;

// export type Callback<T extends any[]> = (...args: T) => void;
export type Callback<T extends any[]> = Func<T, void>;

// export type Condition<T extends any[]> = (...args: T) => boolean;
export type Condition<T extends any[]> = Func<T, boolean>;
