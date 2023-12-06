

FLAGS  = -fno-builtin --target=wasm32 --no-standard-libraries -Os
FLAGS += -Wl,--no-entry -Wl,--export=add -Wl,--allow-undefined

cool.wasm:
	clang $(FLAGS) test.c -o $@
