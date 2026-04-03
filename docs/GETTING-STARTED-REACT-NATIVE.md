# Guía de uso — React Native / Expo

Esta guía explica cómo instalar y usar `@playtopia/icons` en proyectos React Native o Expo.

---

## Requisitos previos

`@playtopia/icons/react-native` usa `react-native-svg` internamente. Debes instalarlo en tu proyecto **antes** de usar los iconos.

---

## Instalación

### Proyectos Expo (recomendado)

```bash
# Instala el paquete de iconos
npm install @playtopia/icons

# Instala react-native-svg con el comando de Expo para que se configure automáticamente
npx expo install react-native-svg
```

### Proyectos React Native bare / CLI

```bash
npm install @playtopia/icons react-native-svg

# iOS — instala los pods nativos
cd ios && pod install && cd ..
```

---

## Uso básico

```tsx
import { IconHome } from "@playtopia/icons/react-native";

export default function MyScreen() {
  return <IconHome />;
}
```

---

## Props disponibles

Todos los iconos extienden las props de `react-native-svg` (`SvgProps`) y añaden `size`:

| Prop                          | Tipo                   | Default | Descripción                  |
| ----------------------------- | ---------------------- | ------- | ---------------------------- |
| `size`                        | `number \| string`     | `24`    | Ancho y alto simultáneamente |
| `width`                       | `number \| string`     | `24`    | Ancho del icono              |
| `height`                      | `number \| string`     | `24`    | Alto del icono               |
| `color`                       | `string`               | `#222`  | Color del trazo (stroke)     |
| `fill`                        | `string`               | `none`  | Color de relleno             |
| `style`                       | `StyleProp<ViewStyle>` | —       | Estilos del contenedor       |
| ...cualquier prop de SvgProps |                        |         |                              |

---

## Ejemplos

### Tamaño personalizado

```tsx
import { IconHome } from '@playtopia/icons/react-native';

// Con prop size
<IconHome size={32} />

// Con width y height independientes
<IconHome width={40} height={40} />
```

### Color personalizado

```tsx
<IconHome size={24} color="#6366f1" />;

// Con colores del tema
import { useTheme } from "tu-tema";

const { colors } = useTheme();
<IconHome size={24} color={colors.primary} />;
```

### Con StyleSheet de React Native

```tsx
import { StyleSheet, View } from "react-native";
import { IconHome } from "@playtopia/icons/react-native";

export function IconButton() {
  return (
    <View style={styles.container}>
      <IconHome size={24} color={styles.icon.color} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 8 },
  icon: { color: "#1a1a2e" },
});
```

### En una lista de tabs

```tsx
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { IconHome, IconUser } from "@playtopia/icons/react-native";

const Tab = createBottomTabNavigator();

<Tab.Navigator>
  <Tab.Screen
    name="Home"
    options={{
      tabBarIcon: ({ color, size }) => <IconHome size={size} color={color} />,
    }}
  />
  <Tab.Screen
    name="Profile"
    options={{
      tabBarIcon: ({ color, size }) => <IconUser size={size} color={color} />,
    }}
  />
</Tab.Navigator>;
```

---

## Uso con Expo Router

Expo Router usa React Navigation internamente, por lo que la integración es la misma:

```tsx
// app/(tabs)/_layout.tsx
import { Tabs } from "expo-router";
import { IconHome } from "@playtopia/icons/react-native";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          tabBarIcon: ({ color, size }) => (
            <IconHome size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
```

---

## Limitaciones conocidas

### Expo Go

`react-native-svg` es un módulo nativo. En **Expo Go** funciona correctamente porque está incluido en el SDK de Expo. Sin embargo, si añades librerías nativas adicionales, necesitarás un **development build**.

```bash
# Crear un development build para tu dispositivo
npx expo run:android
# o
npx expo run:ios
```

### Metro bundler

No se necesita configuración adicional de Metro para usar `@playtopia/icons/react-native`. El bundler resuelve las importaciones automáticamente gracias al campo `exports` en el `package.json` del paquete.

---

## TypeScript

Todos los iconos son completamente tipados. Puedes usar el tipo exportado de cada icono:

```tsx
import { IconHome } from "@playtopia/icons/react-native";
import type { IconHomeProps } from "@playtopia/icons/react-native";

function MyIcon(props: IconHomeProps) {
  return <IconHome {...props} />;
}
```

---

## Versión instalada

```bash
npm ls @playtopia/icons
```
