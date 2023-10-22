import { Text, Box, Image, VStack, HStack, Badge } from '@gluestack-ui/themed';
import { textStyles } from '../TextStyle';

export function SavingsBadge({
  savingName,
  currentSaving,
  goalSaving,
  stepSize,
  currentStep,
  stepsTotal,
  savingImage,
  savingColor,
}: any) {
  return (
    <Badge
      rounded={20}
      style={{ width: 240, height: 240, backgroundColor: '#041C2B', borderRadius: 10 }}>
      <VStack style={{ left: -10 }}>
        <Image source={savingImage} width={240} height={100} />
        <Box style={{ margin: 20 }}>
          <VStack>
            <Text style={textStyles.body}>{savingName}</Text>
            <Text style={textStyles.small}>
              ${currentSaving}/${goalSaving}
            </Text>
            <HStack space="4xl" style={{ marginTop: 10 }}>
              <HStack>
                <Box
                  style={{
                    backgroundColor: savingColor,
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    alignContent: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={[textStyles.small, { textAlign: 'center' }]}>${stepSize}</Text>
                </Box>
                <Box
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    alignContent: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={[textStyles.small, { textAlign: 'center' }]}>x {stepsTotal}</Text>
                </Box>
              </HStack>
              <VStack>
                <Text style={[textStyles.subtitle, { color: savingColor }]}>
                  {Math.round((currentStep / stepsTotal) * 10) * 10}%
                </Text>
                <Text style={[textStyles.small, { fontSize: 10 }]}>
                  {currentStep} out of {stepsTotal}
                </Text>
              </VStack>
            </HStack>
          </VStack>
        </Box>
      </VStack>
    </Badge>
  );
}
