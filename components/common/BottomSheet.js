import { useCallback, useMemo, useRef,forwardRef, useImperativeHandle } from "react"
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import {GlobalDynamics, Globals} from "../../styles/globals"

const BSheet = forwardRef(({children}, ref) => {
    const snapPoints = useMemo(() => ['25%', '50%',], []);

    // ref
    const bottomSheetRef = useRef(null);

    const handleClosePress = () => bottomSheetRef.current?.close();
    const handleOpenPress = () => bottomSheetRef.current?.expand();

    useImperativeHandle(ref,()=>({
        open:handleOpenPress,
        close:handleClosePress
    }))

    return (
            <BottomSheet
                index={-1}
                ref={bottomSheetRef}
                snapPoints={snapPoints}
                enablePanDownToClose={true}
                style={[
                    
                ]}
            >
                <BottomSheetView>
                  {children}
                </BottomSheetView>
            </BottomSheet>
    )
});

export default BSheet;