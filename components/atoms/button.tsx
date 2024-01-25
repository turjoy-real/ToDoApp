import { ReactNode } from "react";
import { TouchableOpacity } from "react-native";

interface ButtonProps {
    function: (index:number) => void;
    children: ReactNode;

}

const TouchableButton = ({function:children}:ButtonProps) => {
    return (
      <TouchableOpacity
        style={{
          width: 30,
          flex: 1,
          alignItems: 'flex-end',
          paddingRight: 20,
        }}
        onPress={function}>
        {children}
      </TouchableOpacity>
    );
}