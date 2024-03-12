import { TouchableOpacity, View } from "react-native";
import {
  Text,
  LayoutWrapper,
  Image,
  Icon,
  Button,
  Avatar,
  useTheme,
} from "@/ui";
import { useEffect, useState } from "react";
import Logo from "@/assets/logo.png";
import SwipeUpDownModal from "react-native-swipe-modal-up-down";
import { BlurView } from "expo-blur";

export const CastButton = () => {
  const [show, setShow] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  const theme = useTheme();

  const handlePressButton = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setAnimateModal(false);
  };

  return (
    <>
      <TouchableOpacity onPress={handlePressButton}>
        <Icon source="cast" size={24} />
      </TouchableOpacity>

      <SwipeUpDownModal
        modalVisible={show}
        PressToanimate={animateModal}
        MainContainerModal={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
        ContentModal={
          <BlurView
            style={{
              width: "100%",
              bottom: 0,
              position: "absolute",
              overflow: "hidden",
              paddingVertical: 24,
              paddingHorizontal: 24,
              paddingBottom: 68,
              backgroundColor: "rgba(33, 45, 64, 0.4)",
            }}
            intensity={30}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text variant="headlineSmall" style={{ fontWeight: "600" }}>
                Transmitir a
              </Text>
              <Button textColor="white" onPress={handleClose}>
                Cancelar
              </Button>
            </View>
            <View style={{ gap: 12, marginTop: 24 }}>
              <View
                style={{
                  flexDirection: "row",
                  gap: 12,
                  borderBottomWidth: 1,
                  borderColor: theme.colors.outline,
                  paddingBottom: 12,
                }}
              >
                <Icon source="monitor" size={24} />
                <Text variant="bodyMedium" style={{ fontWeight: "600" }}>
                  Dormitorio
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  gap: 12,
                  borderBottomWidth: 1,
                  borderColor: theme.colors.outline,
                  paddingBottom: 12,
                }}
              >
                <Icon source="monitor" size={24} />
                <Text variant="bodyMedium" style={{ fontWeight: "600" }}>
                  Oficina
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  gap: 12,
                }}
              >
                <Icon source="monitor" size={24} />
                <Text variant="bodyMedium" style={{ fontWeight: "600" }}>
                  Comedor
                </Text>
              </View>
            </View>
          </BlurView>
        }
        onClose={() => {
          handleClose();
        }}
      />
    </>
  );
};
