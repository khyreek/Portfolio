interface ObjectConstructor {
    /**
     * Making the return type of the .keys method the keys of the object
     * instead of string.
     *
     * @param obj The object to get the keys of
     * @returns The keys of the object
     */
    keys<T extends object>(obj: T): (keyof T)[];
}
